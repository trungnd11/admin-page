import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PageRouter } from "../../router/allRouter"

export default function SlideItem() {
  const [open, setOpen] = useState(false);
  return (
    <div className="slide-item text-white">
      <ul className="parents">
        {PageRouter.map((route, index) => (
          <div key={index}>
            {!route.children ? (
              <NavLink
                className="item d-flex align-items-center"
                key={index}
                to={route.path}
              >
                <i className={route.icon} />
                <li className="ms-2">{route.name}</li>
              </NavLink>
            ) : (
              <div>
                <div
                  className="d-flex justify-content-between item"
                  onClick={() => setOpen(!open)}
                >
                  <div className="d-flex align-items-center">
                    <span className={route.icon} />
                    <li className="text-white ms-2">{route.name}</li>
                  </div>
                  {open ? (
                    <i
                      className="fa-solid fa-angle-up pt-1 text-white"
                      onClick={() => setOpen(!open)}
                    />
                  ) : (
                    <i
                      className="fa-solid fa-angle-down pt-1 text-white"
                      onClick={() => setOpen(!open)}
                    />
                  )}
                </div>
                <Collapse in={open}>
                  <ul className="">
                    {route.children.map((item: any, index: number) => (
                      <NavLink
                        className="item ms-2 ps-2 d-flex align-items-center"
                        key={index}
                        to={`component${item.path}`}
                      >
                        <i className={item.icon} />
                        <li className="ms-2">{item.name}</li>
                      </NavLink>
                    ))}
                  </ul>
                </Collapse>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
