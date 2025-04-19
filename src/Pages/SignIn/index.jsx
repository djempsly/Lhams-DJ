import Layout from "../../Component/Layout"

function SignIn() {

  return (
    <>
      <Layout>
        SignIn
      </Layout>

      <form>
                <div>
                <label htmlFor="">Escribe tu email</label>
                <input type="email" placeholder='Escribe tu email' />
                </div>
            </form>
  
    </>
  )
}

export default SignIn