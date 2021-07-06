import React from 'react'

function Home() {

  React.useEffect( () => {
    console.log(
      '%c  -- GA Project: WoCRO --','font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)', '\n',
      'Hi there, thanks for checking out this project.', '\n',
      'I\'m currently looking for employement opportunities.', '\n',
      'Feel free to get in touch if you\'d like to have a chat!', '\n',
      '{', '\n',
      '  name: \'Anthony Graham\',', '\n',
      '  peopleCallMe: \'🐜\',', '\n',
      '  title', ': \'Junior Software Engineer\',', '\n',
      '  github: \'https://github.com/databoy5000\',', '\n',
      '  linkedin: \'https://www.linkedin.com/in/anthonygdev/\',', '\n',
      '  projectReadMe: \'https://github.com/databoy5000/project-2/blob/main/README.md\',', '\n',
      '}'
    )
  },[])

  return (
    <section className="hero is-fullheight-with-navbar has-background-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Quotetionary</h1>
        </div>
      </div>
    </section>
  )
}

export default Home