import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function hanldeParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert(`Participante Existe `, "Já existe!")
    } 

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove( name: String) {

    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name) )
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

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
            onChangeText={setParticipantName}
            value={participantName}
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