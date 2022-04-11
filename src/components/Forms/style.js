import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    formContext: {
        width: "100%",
        height: "80%",
        bottom: 0,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderRadius:30,
        marginTop:30,
    },
    form :{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f0f0f0",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator:{
        color: "#ffffff",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor:"#FF8200",
        paddingTop:14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color:"#FFFFFF",
    },

})

export default styles

