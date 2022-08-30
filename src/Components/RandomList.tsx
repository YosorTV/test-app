import { FC, useMemo } from 'react'

type List = { 
  listData: number[];
}

export const RandomList:FC<List> = ({ listData }) => {
  
  const generateNumbers = useMemo(() => {
    return (<>{listData?.map((item) => <li key={item}>{item}</li>)}</>)
  }, [listData])

  return (
    <ul>
      {generateNumbers}
    </ul>
  )
}
