import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES=[
  {id:'q1', author:'max', text:'heh'},
  {id:'q2', author:'maxillion', text:'haha'},
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;