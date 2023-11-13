import {createStackNavigato } from '@react-navigation/stack';
import { useEffect,useSelector } from 'react';
import { fetchContactSuccess } from './Store';
import { View, FlagList } from 'react-native';

export default FileContact;
const FileContact = () => {
const keyExtractor = ({ phone }) => phone ;

const fetchContacts = async () =>{
    const data = await fetch("https://randomuser.me/?results=50")
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);

};
const Contacts = ({ navigation })=>{
     const{ contacts } = useSelector((state)=> state);
     const dispatch = useDispatch();
     useEffect(() => {
        fetchContacts()
        .then(
            contacts => {
                dispatch(fetchContactSuccess(contacts));
            }
        )
        .catch(
            e => {
            }
        )        
     })
}
const renderContacts= ({item}) => {
const { name, avatar, phone } = item;
return <ContactListItem
name={name}
avatar={avatar}
phone={phone}
onPress = {() => navigation.navigate("ProfileContact", { contact:item})} />
};
return(
    <View style={Styles.container}>
    <FlagList
      data={contacts}
      keyExtractor={keyExtractor}
      renderItem={renderContacts}
      />
      </View>
);
}   



