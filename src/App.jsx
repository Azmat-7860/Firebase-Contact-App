import { useEffect, useState } from "react";
import "./App.css";
import Input from "./compnent/Input";
import Nabvar from "./compnent/Nabvar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firbase";
import Contacts from "./compnent/Contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactsRef);
        const contactsList = contactSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactsList);
      } catch (err) {
        console.log(err);
      }
    };
    getContacts();
    // console.log(contacts);
  }, []);
  // console.log("i from app", contacts);
  return (
    <div className="app-container m-auto">
      <Nabvar />
      <Input />
      {contacts.map((data) => (
        <Contacts key={data.id} data={data} />
      ))}
    </div>
  );
}

export default App;
