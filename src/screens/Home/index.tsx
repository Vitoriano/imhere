import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {

  const participants = ['Ana', 'Maria', 'Vitoriano', 'Paulo', 'Joao', 'Jose', 'Vini', 'Marcos', 'Lauro', 'Jorel', 'Biro'];

  function hanldeParticipantAdd() {
    console.log("Add"); 
  }

  function handleParticipantRemove( name: String) {
    console.log(`Remove: ${name}`);
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

        <ScrollView>
          {
            participants.map(participant => (
              <Participant 
                key={participant}
                name= {participant}
                onRemove={ () => handleParticipantRemove(participant)}
              />
            ))
          }
        </ScrollView>
      

      
        
      </View>
    </>
    
  )
}