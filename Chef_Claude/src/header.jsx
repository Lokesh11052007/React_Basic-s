import chef from "./assets/chef.png"

export default function header() {
    return(
    <header>
      <img src={chef} alt="chef logo" />
      <h1>Chef Claude</h1>
    </header>
    )
}