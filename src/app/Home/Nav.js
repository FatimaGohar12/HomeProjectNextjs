import React from "react";
import "./home.css";
import Link from "next/link";
import { Icon } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Nav = () => {
  return (
    <>
      <div className="homecontainer">
        <div className="header">
          <div className="navbar-right">
            <ul>
              <li>
                <img src="./logo.png" alt="logo" />
              </li>
              <li>
                <Link href="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link href="/audio">Audio</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
              <li>
                <Link href="/comfort-and-safety">Comfort & Safety</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-left">
            <ul>
              <li>
                <Link href="/comfort-and-safety">
                  <Icon as={EmailIcon} mr={2} />
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <Icon as={PhoneIcon} mr={2} /> 647-693-5688
                </Link>
              </li>
            </ul>
            <div className="btn-div">
              <button>Request a Quote</button>
            </div>
          </div>
        </div>
        <div className="main">
          <h1>Elevate your living experienc</h1>
        </div>
      </div>
    </>
  );
};

export default Nav;
