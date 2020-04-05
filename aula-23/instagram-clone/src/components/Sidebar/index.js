import React, { Component } from "react"
import axios from "axios"

//export default function Sidebar() {
class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}, //user é um objeto
      stories: [], //é uma array porque são vários itens
    }
  }

  async getStories() {
    const { data } = await axios.get("http://localhost:3000/stories")
    this.setState({ stories: data })
  }

  async getUser() {
    const { data } = await axios.get("http://localhost:3000/user")
    this.setState({ user: data })
  }

  componentDidMount = () => {
    // axios.get("http://localhost:3000/stories").then((res) => {
    //   this.setState({ conteudo: res.data })
    // })
    this.getStories()
    this.getUser()
  }

  render() {
    return (
      <div>
        <div className="user-info">
          <img
            alt="Perfil"
            src="https://randomuser.me/api/portraits/women/25.jpg"
          />
          <div className="user-bio">
            <strong>{this.state.user.name}</strong>
            <span>jenicarvalho</span>
          </div>
        </div>
        <h2>Stories</h2>
        {this.state.stories.map((item) => (
          <div key={item.id} className="stories">
            <div className="storie">
              <div className="storie-image">
                <img src={item.userPicture} alt="user" />
              </div>
              <div className="storie-user">
                <strong>{item.user}</strong>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Sidebar
