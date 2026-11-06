import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const crud = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CREAR CRUD</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca tu DNI'
          style={styles.input}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca tus Nombres'
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca tu Correo Electronico'
          style={styles.input}
          keyboardType='email-address'
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca Tu Celular'
          style={styles.input}
          keyboardType='number-pad'
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>CREATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>READ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default crud;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 20,
  },
});