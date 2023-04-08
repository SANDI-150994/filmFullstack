import { View, Text,  Image, Dimensions, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Movie = ({navigation}) => {
  const [movies, setMovies] = useState([])
  useEffect (() => {
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=e4eaa702872478a0a6718267a86defe7`
    axios.get(url).then(res => {
      setMovies (res.data.results)
    })
  }, [] )
  console.log ("data yang akan di render", movies)
  return (
    <ScrollView style={styles.container}>
      {movies.map ((item, index) => {
          return (
            <TouchableOpacity onPress={() => {navigation.navigate('Detail', {movie_id: item.id})}}>
              <View style={styles.containerImage} key={index}>
                <Image style ={styles.image} source ={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}/>
            
                <Text style={styles.titile_text}>{item.title}</Text>
                <Text style={styles.release_text}>{item.release_date}</Text>
                <Text style={styles.overview_text}>{item.overview}</Text>  
              </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
    // justifyContent : 'center',
    // alignItems : 'center'
  }, 
  containerImage:{
    // borderwidth: 6,
    alignItems:'center',
    padding:20,
    margin:20,
    borderColor: '#ffff',
    backgroundColor:'rgba(220, 204, 174, 2)',
    borderRadius:10,
    // border:'3px rgb (255, 0, 255)'
  },
  image :{
    height: Dimensions.get ('screen').height * 0.50,  
    width: Dimensions.get('screen').height * 0.40,
    borderRadius:10,
    borderColor: 'black',
  },
  titile_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    // margin: 5
  },
  release_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'
  },
  overview:{
    fontSize: 16,
    color: '#5c5e62',
    marginBottom: 10
  }
})

export default Movie

// instal navigation stage, percantik halaman ini, silahkan tambahkan yang ada didalam inspect