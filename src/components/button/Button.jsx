import "../button/button.css";

export function Button(props) {
  return (
    <button className={props.color ? `button pink` : "button"}>
      <span className="button-mask"></span>
      <p>{props.buttonText}</p>
      {props.isArrow ? (
        <img
          alt="arrow right"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi43NyIgaGVpZ2h0PSIxNy44NzciIHZpZXdCb3g9IjAgMCAyMi43NyAxNy44NzciPgogIDxwYXRoIGlkPSJfNm0tbmV4dCIgZGF0YS1uYW1lPSI2bS1uZXh0IiBkPSJNNjU2LjMsNzEzLjZhMi41MTYsMi41MTYsMCwwLDEtMi41MTgsMi41MThINjQyLjAzNGwyLjQ5MiwyLjQ4NWEyLjMwNywyLjMwNywwLDAsMS0zLjI2NiwzLjI2bC03LjM2NS03LjM2NWExLjI0OSwxLjI0OSwwLDAsMSwwLTEuNzU3bDcuNDExLTcuNDExYTIuMzA5LDIuMzA5LDAsMCwxLDMuMjYsMCwyLjMwOSwyLjMwOSwwLDAsMSwuMDA3LDMuMjZsLTIuNDkyLDIuNDg2aDExLjcwNUEyLjUyMSwyLjUyMSwwLDAsMSw2NTYuMyw3MTMuNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1Ni4zMDMgNzIyLjUzMikgcm90YXRlKDE4MCkiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg=="
        ></img>
      ) : null}
    </button>
  );
}
