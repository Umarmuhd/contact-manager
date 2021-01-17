import React, { useState, useEffect } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import { ReactComponent as ContactLogo } from "./images/contact.svg";
import SearchContact from "./components/SearchContact";
import { ReactComponent as Printer } from "./images/printer.svg";
import Filter from "./components/Filter";
import BotHeader from "./components/BotHeader";
import Contacts from "./components/Contacts";
import Pagination from "./components/Pagination";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState({ sortby: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ gender: "", paymentmethod: "" });

  useEffect(() => {
    async function fetchContacts() {
      setLoading(true);
      const request = await axios.get(
        "https://api.enye.tech/v1/challenge/records"
      );
      setContacts(request.data.records.profiles);
      setLoading(false);
      return request;
    }
    fetchContacts();
  }, []);

  /* Input change handler for sort by */

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setSort({ ...sort, [name]: value });
  };

  /* Ultimate function */

  //Get current contacts
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const Sortby = () => {
    const tofilter = [...contacts];

    //Searching works
    let filContactS = tofilter.filter((contact) =>
      contact.FirstName.includes(search)
    );

    //Filter gender
    let filContactG = filContactS.filter((contact) =>
      contact.Gender.includes(filters.gender)
    );

    //Filter payment method
    let filContactPM = filContactG.filter((contact) =>
      contact.PaymentMethod.includes(filters.paymentmethod)
    );

    // Sort A-Z
    if (sort.sortby === "a-z") {
      const tosorted = [...filContactPM];
      const atoz = tosorted.sort((a, b) =>
        a.FirstName.localeCompare(b.FirstName, "es", { sensitivity: "base" })
      );
      let currentContacts = atoz.slice(indexOfFirstContact, indexOfLastContact);
      return <Contacts contacts={currentContacts} loading={loading} />;
    }
    //Sort Last login
    else if (sort.sortby === "last-login") {
      const tosortedbydate = [...filContactPM];
      const sortedbydate = tosortedbydate.sort((a, b) =>
        b.lastlogin > a.lastlogin ? 1 : -1
      );
      let currentContacts = sortedbydate.slice(
        indexOfFirstContact,
        indexOfLastContact
      );
      console.log(currentContacts);
      return <Contacts contacts={currentContacts} loading={loading} />;
    }
    //Default sort
    else {
      const todefault = [...filContactPM];
      let currentContacts = todefault.slice(
        indexOfFirstContact,
        indexOfLastContact
      );
      return <Contacts contacts={currentContacts} loading={loading} />;
    }
  };

  return (
    <div className="App vh-100">
      <div className="contacts-top-header py-2 px-4">
        <div className="left-1">
          <ContactLogo />
          <span className="font-weight-bold">Contacts</span>
        </div>
        <SearchContact searchText={(text) => setSearch(text)} />
      </div>
      <div className="contacts-mid-header py-2 border-top border-bottom px-4">
        <div className="left-2 d-flex align-items-center">
          Sort by :
          <div className=" ml-2 p-0 d-flex align-self-center">
            <select
              id="inputState"
              className="form-control"
              onChange={handleInputChange}
              onBlur={handleInputChange}
              name="sortby"
              value={sort.sortby}
            >
              <option value="">Default</option>
              <option value="a-z">A - Z</option>
              <option value="last-login">Last login</option>
            </select>
          </div>
        </div>
        <div className="right-2 d-flex">
          {<button className="btn btn-outline-dark mr-4" onClick={()=>window.print()}>
            <Printer />
          </button>}
          <Filter filters={(obj) => setFilters(obj)} />
        </div>
      </div>
      <BotHeader />
      <main>{loading ? <Loading /> : Sortby()}</main>
      <div className="px-4">
        <Pagination
          contactsPerPage={contactsPerPage}
          totalContacts={contacts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
