import React from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
    display: block;
    margin: 0;
    border-color: #A8D0E6;
`;

function Loader({ status }) {
    return (
        <div className="sweet-loading">
        {
            status ? (
                <HashLoader color="#A8D0E6" loading={status} css={override} size={35} />
            ) : (null)
        }
        </div>
    );
}

export default Loader;
