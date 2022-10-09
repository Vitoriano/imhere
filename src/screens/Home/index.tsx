import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {

  function hanldeParticipantAdd() {
    console.log("Ola"); 
  }

  return (
    <>
      <View style={styles.container}>
        <Text 
          style={styles.eventName}
          key="1">
          Nomde do Evento
        </Text>
        <Text 
          style={styles.eventDate}
          key="2"
        >
          Sexta, 4 de Novembro de 2022
        </Text>

        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6d6b"
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={hanldeParticipantAdd}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <Participant />
        <Participant />
        
      </View>
    </>
    
  )
}