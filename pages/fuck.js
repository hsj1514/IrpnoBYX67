// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
//
// const Fuck = (props) => (
//   <div>
//     <h1>Batman TV Shows</h1>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       )
//       )}
//     </div>
// )
//
// Fuck.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//   console.log(data[1])
//   console.log(data[1].show.name)
//
//   console.log(`Show data fetched. Count: ${data.length}`)
//
//   return {
//     shows: data
//   }
// }
//
// export default Fuck
