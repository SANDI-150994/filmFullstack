import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Details = ({route}) => {
    const [detail, setDetail] =useState([])
    console.log('ini route', route.params.movie_id)
    useEffect(() => {
        axios.get(
            'https://api.themoviedb.org/3/movie/' + route.params.movie_id + '?api_key=e4eaa702872478a0a6718267a86defe7&language=en-US').then((res) => setDetail(res.data))
    })
    return (
    <View>
        {
            detail.genres && detail.genres.map((item)=>(
                <Text key={item.id}>{item.name}</Text>
            )) 
        }
      <Text>Detail</Text>
    </View>
  )
}

export default Details