import React, { useEffect, useState } from "react";

const InfoDisplayPage = () => {
  const [userDetails, setUserDetails] = useState("");
  // console.log(userDetails);
  const details = JSON.parse(localStorage.getItem("info"));
  const { id } = details;
  // console.log(id);
  useEffect(() => {
    (() => {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUserDetails(data));
    })();
  }, []);

  return (
    <div className="user-info-container">
      <div className="info-div">
        <div>
          <div id="img-div">
            <img src={userDetails.image} alt={userDetails.maidenName} />
          </div>
          <h1 id="name">
            {userDetails.firstName} {userDetails.lastName}
          </h1>
        </div>
        <div className="more-info">
          <p>
            <strong>Email</strong>: {userDetails.email}{" "}
          </p>
          <p>
            <strong>Phone</strong>: {userDetails.phone}{" "}
          </p>
          <p>
            <strong>UserName</strong>: {userDetails.userName}{" "}
          </p>
          <p>
            <strong>Password</strong>: {userDetails.password}{" "}
          </p>
          <p>
            <strong>DOB</strong>: {userDetails.birthDate}{" "}
          </p>
          <p>
            <strong>Blood Grp.</strong>: {userDetails.bloodGroup}{" "}
          </p>
          <p>
            <strong>Height</strong>: {userDetails.height}{" "}
          </p>
          <p>
            <strong>Weight</strong>: {userDetails.weight}{" "}
          </p>
          <p>
            <strong>EyeColor</strong>: {userDetails.eyeColor}{" "}
          </p>
          <p>
            <strong>Domain</strong>: {userDetails.domain}{" "}
          </p>
          <p>
            <strong>Ip</strong>: {userDetails.ip}{" "}
          </p>
          <p>
            <strong>University</strong>: {userDetails.university}{" "}
          </p>
          {userDetails.address && (
            <p>
              <strong>Address</strong>:{" "}
              <address>
                {userDetails.address.address}, {userDetails.address.city},{" "}
                {userDetails.address.postalCode}
              </address>{" "}
            </p>
          )}
          {userDetails.bank && <p>
            <strong>Bank Details</strong>:
            <br />
            <pre> Card Number: {userDetails.bank.cardNumber}</pre>
            <pre> Card Expiry: {userDetails.bank.cardExpire}</pre>
          </p>}
        </div>
      </div>
    </div>
  );
};

export default InfoDisplayPage;
