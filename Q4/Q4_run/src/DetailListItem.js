import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImagePropertiesAndroid, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-styles';


DetailListItem.PropTypes = {
    icon: PropTypes.Icon,
    title: PropTypes.String,
    subtitle: PropTypes.string
}
DetailListItem.defaultProps = {
    name: '',
    phone: '',
    textColor: "white",
}
const DetailListItem = ({ icon, title, subtitle, textColor }) => {
    const colortStyle = {
        color: textColor,
    }
    return (
        <View style={styles.container}>
            <i className={`fa fa-${icon}`}
                style={styles.icon}></i>
            <Text>{title}
                style={styles.title}</Text>
            <Text>{subtitle}
                style={styles.subtitle}</Text>
        </View>
    )

}
export default DetailListItem;
const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    title: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },
})