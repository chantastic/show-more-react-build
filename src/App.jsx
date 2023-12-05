import * as React from 'react'

function ShowLess({ children }) {
  let [expanded, setExpanded] = React.useState(true)

  return (
    <div>
      <div>{children}</div>
      <button onClick={() => setExpanded(!expanded)}>
        Show {expanded ? 'less' : 'more'}
      </button>
    </div>
  )
}

export default function App() {
  return (
    <ShowLess>
      <p>
        Software is like sex: It’s better when it’s free. (Linus Torvalds) The
        best performance improvement is the transition from the nonworking state
        to the working state. (J. Osterhout) The most amazing achievement of the
        computer software industry is its continuing cancellation of the steady
        and staggering gains made by the computer hardware industry. (Henry
        Petroski) Windows NT addresses 2 Gigabytes of RAM, which is more than
        any application will ever need. (Microsoft, on the development of
        Windows NT, 1992) The use of COBOL cripples the mind; its teaching
        should therefore be regarded as a criminal offense. (E.W. Dijkstra)
      </p>
      <p>
        Every operating system out there is about equal… We all suck. (Microsoft
        senior vice president Brian Valentine describing the state of the art in
        OS security, 2003) Ready, fire, aim: the fast approach to software
        development. Ready, aim, aim, aim, aim: the slow approach to software
        development. (Anonymous) If debugging is the process of removing
        software bugs, then programming must be the process of putting them in.
        (Edsger Dijkstra) The city’s central computer told you? R2D2, you know
        better than to trust a strange computer! (C3PO) A great lathe operator
        commands several times the wage of an average lathe operator, but a
        great writer of software code is worth 10,000 times the price of an
        average software writer. (Bill Gates)
      </p>
    </ShowLess>
  )
}
