import { Colors, Constants, Spacing } from "@theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        borderRadius: Constants.borderRadius,
        paddingHorizontal: Spacing.MEDIUM,
        // borderWidth: 1,
        // borderColor: Colors.black,
        backgroundColor: Colors.lightGray,
        width: '100%',
    }
});