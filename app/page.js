"use client"
import ErrorCard from "@/components/ErrorCard";
import QuoteCard from "@/components/QutoeCard";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

export default function Home() {

  const [quotes, setQuotes] = useState([])
  const [error, setError] = useState(false)

  useEffect( () => {
    const fetchQuotes = async () => {
      
      try {
        
        const response = await fetch('/api/quotes')
        const data = await response.json()
        setQuotes(data)

      } 
      catch (error) {
        setError(true)  
      }
    }

    fetchQuotes()
  }, [])

  if (! quotes.length) return <Spinner />

  if (error) return <ErrorCard />

  return (
    <main className="flex h-full w-full flex-wrap  items-center justify-between  bg-gray-100 p-4">
      {quotes.map((item, index) => (
        <QuoteCard key={index} quote={item.quote} author={item.author} index={index} />
      ))}
    </main>
  );
}
