import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {

  const participants = ['Ana', 'Maria', 'Vitoriano', 'Paulo', 'Joao', 'Jose', 'Vini', 'Marcos', 'Lauro', 'Jorel', 'Biro'];

  function hanldeParticipantAdd() {
    if(participants.includes("Vitoriano")) {
      return Alert.alert(`Participante Existe `, "Já existe!")
    } 
  }

  function handleParticipantRemove( name: String) {
    Alert.alert("Remover", `Remover o participanete ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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

        <FlatList 
          data={participants}
          keyExtractor={ item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Participant 
              key={item}
              name= {item}
              onRemove={ () => handleParticipantRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Niguem chegou no evento ainda ? Adicione participantes a sua lista de presença.
            </Text>
          )}
        />
 
      </View>
    </>
    
  )
}