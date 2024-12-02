import { StyleSheet, Text, View } from 'react-native'
import { primaryAccentColor } from '../../utils/colors'

export const initialSetup = StyleSheet.create({
    container:{
        padding:25,
        paddingVertical:50,
        fontFamily:'poppins'
    },
    heading:{fontSize:35},
    paragraph:{
        fontSize:15,opacity:0.6
    },
    button:{
        color: '#FFFFFF',          
        fontSize: 20,              
        textAlign: 'center',   
        marginTop:20,
      backgroundColor: primaryAccentColor, // Background color
      paddingVertical: 15,        // Top and bottom padding
      paddingHorizontal: 25,      // Left and right padding
      borderRadius: 80, 
    }
})