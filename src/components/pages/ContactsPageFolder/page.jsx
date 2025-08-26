import "./contactsPage.scss";
import { useGetContactsQuery } from "@/api/apiSlice";
import QueryWrapper from "@/utils/QueryWrapper";
import { Helmet } from "react-helmet";
const ContactsPage = () => {
  const {
    data: contacts = [],
    isLoading,
    isError,
    isFetching,
  } = useGetContactsQuery();

  const renderContacts = (contacts) => {
    return contacts.map(({ list, title }, idx) => {
      return (
        <div className="contactsPage____subblock" key={idx}>
          <h2 className="contactsPage__subblock-title fz-14 fw-600">{title}</h2>
          {list.map((item, idx) => {
            return (
              <div
                className="contactsPage__subblock-item fz-14 fw-400"
                key={idx}
              >
                {item}
              </div>
            );
          })}
        </div>
      );
    });
  };
  return (
    <>
      <Helmet>
        <meta name="Contacts" content="Contacts Page" />
        <title>Contacts Page</title>
      </Helmet>
      <section className="contactsPage">
        <div className="container">
          <nav className="pageNav">
            <Link to="/">Главная &gt; </Link>
            <Link className="pageNav__curr" to="/news">
              Контакты &gt;
            </Link>
          </nav>
          <div className="contactsPage__wrapper">
            <div className="contactsPage__block contactsPage__block--info">
              <h1 className="contactsPage__title fz-24 fw-600">Контакты</h1>
              <QueryWrapper
                isError={isError}
                isFetching={isFetching}
                isLoading={isLoading}
                data={contacts}
              >
                {renderContacts(contacts)}
              </QueryWrapper>
            </div>
            <div className="contactsPage__block contactsPage__block--images">
              <img
                className="contactsPage__block-location"
                src="/img/delivery/location.png"
                alt="location"
              />
              <img
                className="contactsPage__block-macaron"
                src="/img/delivery/macaron-yellow.png"
                alt="macaron-yellow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
