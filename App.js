import { useForm, Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // Definir los datos del formulario que se validara
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      salary: "",
    },
  });

  // Definir el método para mostrar los datos(Cuando sean validos)

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          maxLength: 30,
          minLength: 3,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.inputs,
              {
                borderColor:
                  errors.fullname?.type == "required" ||
                  errors.fullname?.type == "minLength" ||
                  errors.fullname?.type == "maxLength" ||
                  errors.fullname?.type == "pattern"
                    ? "red"
                    : "lightblue",
              },
            ]}
            placeholder="Digite este campo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type == "required" && (
        <Text style={{ color: "red" }}>Debe digitar este campo</Text>
      )}
      {errors.fullname?.type == "maxLength" && (
        <Text style={{ color: "red" }}>Debe tener maximo 30 caracteres</Text>
      )}
      {errors.fullname?.type == "minLength" && (
        <Text style={{ color: "red" }}>Debe tener minimo 3 caracteres</Text>
      )}
      {errors.fullname?.type == "pattern" && (
        <Text style={{ color: "red" }}>Estos caracteres no son validos</Text>
      )}

      {/* INPUT EMAIL */}
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.inputs,
              {
                borderColor:
                  errors.email?.type == "required" ||
                  errors.email?.type == "pattern"
                    ? "red"
                    : "lightblue",
              },
            ]}
            placeholder="Digite este campo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type == "required" && (
        <Text style={{ color: "red" }}>Debe digitar este campo</Text>
      )}
      {errors.email?.type == "pattern" && (
        <Text style={{ color: "red" }}>Estos caracteres no son validos</Text>
      )}

      {/* INPUT PASSWORD */}
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: [
            /^(?=(?:.*\d){2})(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})\S{8,15}$/,
          ],
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.inputs,
              {
                borderColor:
                  errors.password?.type == "required" ||
                  errors.password?.type == "pattern"
                    ? "red"
                    : "lightblue",
              },
            ]}
            placeholder="Digite este campo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      {errors.password?.type == "required" && (
        <Text style={{ color: "red" }}>Debe digitar este campo</Text>
      )}
      {errors.password?.type == "pattern" && (
        <Text style={{ color: "red" }}>Estos caracteres no son validos</Text>
      )}
      {/* {errors.password?.type == "maxLength" && (
        <Text style={{ color: "red" }}>Debe tener maximo 30 caracteres</Text>
      )}
      {errors.password?.type == "minLength" && (
        <Text style={{ color: "red" }}>Debe tener minimo 3 caracteres</Text>
      )} */}

      {/* INPUT SALARIO */}
      <Controller
        control={control}
        rules={{
          required: true,
          pattern:
            /^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,8}(,\d{3})*(\.\d+)?$/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.inputs,
              {
                borderColor:
                  errors.salary?.type == "required" ||
                  errors.salary?.type == "pattern"
                    ? "red"
                    : "lightblue",
              },
            ]}
            placeholder="Digite este campo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="salary"
      />
      {errors.salary?.type == "required" && (
        <Text style={{ color: "red" }}>Debe digitar este campo</Text>
      )}
      {errors.salary?.type == "pattern" && (
        <Text style={{ color: "red" }}>Estos caracteres no son validos</Text>
      )}
      {/* {errors.password?.type == "maxLength" && (
        <Text style={{ color: "red" }}>Debe tener maximo 30 caracteres</Text>
      )}
      {errors.password?.type == "minLength" && (
        <Text style={{ color: "red" }}>Debe tener minimo 3 caracteres</Text>
      )} */}

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          borderRadius: 10,
          padding: 5,
          width: 150,
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    padding: 10,
    borderRadius: 7,
    color: "black",
    marginBottom: 5,
    borderWidth: 3,
    borderColor: "lightblue",
  },
});
