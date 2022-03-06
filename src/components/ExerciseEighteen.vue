<template>
  <div id="exercise-eighteen-container">
    <h2>18.- Calificación Examen</h2>
    <div>
      <input
        v-model="user"
        placeholder="¿Cuál es tu nombre?"
        id="nameExerciseEighteen"
        required
      />
      <input
        v-model="num"
        placeholder="Escriba su nota (entre 0 y 10)"
        id="numExerciseEighteen"
        :rules="numRules"
        required
      />

      <input
        v-model="subject"
        placeholder="Escriba la materia"
        id="subjectExerciseEighteen"
        required
      />

      <v-btn @click="examGrade()">Aceptar</v-btn>
    </div>
    <div id="resultExerciseEighteen">{{ result }}</div>
    <div id="resultListExerciseEighteen">
      <h4>{{ user }}</h4>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-for="(result, index) in resultList" :key="index">
            {{ result }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseEighteen",

  data: () => ({
    user: "",
    num: "",
    subject: "",
    message: "",
    result: "",
    resultList: [],
    numRules: [
      (value) => !!value || "Debes incluir una nota",
      (value) => value.length < 3 || "Debe tener un máximo de dos dígitos",
    ],
  }),

  methods: {
    examGrade() {
      if (this.num <= 10) {
        if (this.num > 0 && this.num < 3) {
          this.message = " -> Deficiente";
        }

        if (this.num >= 3 && this.num < 5) {
          this.message = " -> Insuficiente";
        }

        if (this.num >= 5 && this.num < 6) {
          this.message = " -> Suficiente";
        }

        if (this.num >= 6 && this.num < 7) {
          this.message = " -> Bien";
        }

        if (this.num >= 7 && this.num < 9) {
          this.message = " -> Notable";
        }

        if (this.num >= 9 && this.num < 10) {
          this.message = " -> Sobresaliente";
        }
      }

      if (this.num > 10 || this.num < 0) {
        alert("This calificación is not valid");
      }

      this.result = this.subject + this.message;
      this.resultList.push(this.result);

      this.num = "";
      this.subject = "";
    },
  },
};
</script>

<style lang="scss">
#exercise-eighteen-container {
  // max-width: 50%;
  // margin: 0 auto;

  & > div > * {
    margin-top: 1rem;
  }

  input#numExerciseEighteen {
    display: block;
    min-width: 14rem;
  }

  button {
    display: block;
  }

  #resultExerciseEighteen {
    margin-top: 1rem;
  }
}
</style>
