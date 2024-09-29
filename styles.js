import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 20
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20
    },
    pressableButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    textField: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    passwordTextField: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        backgroundColor: 'plum',
        marginBottom: 10
    }
});

export default styles;