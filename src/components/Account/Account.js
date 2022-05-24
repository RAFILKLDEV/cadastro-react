import React, { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";

const Account = ({  }) => {

    const { email, setEmail } = useContext(AuthContext)

    return(
        <Fragment>
            <div>{email ? "Bem vindo! " + email : "Você precisa estar logado para acessar este Conteudo!"}</div>
            {email? <button onClick={()=> setEmail(null)}>Logout!</button> : <div></div>}
        </Fragment>
    )
}

export default Account