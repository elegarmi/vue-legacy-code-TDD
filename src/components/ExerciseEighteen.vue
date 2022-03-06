<template>
  <div id="exercise-eighteen-container">
    <h2>18.- Calificación Examen</h2>
    <div>
      <input
        v-model="name"
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
      <h4>{{ name }}</h4>
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

  data: () => {
    return {
      name: "",
      num: "",
      subject: "",
      result: "",
      resultList: [],
      numRules: [
        (value) => !!value || "Debes incluir una nota",
        (value) => value.length < 3 || "Debe tener un máximo de dos dígitos",
      ],
    };
  },

  methods: {
    examGrade() {
      let num = parseInt(this.num);
      let subject = this.subject;

      if (num >= 0 || num <= 10) {
        if (num < 3) {
          this.result =
            "Nota: " +
            num +
            " - La calificación en " +
            subject +
            " es MUY DEFICIENTE";
        }
        if (num < 5) {
          this.result =
            "Nota: " +
            num +
            " - La calificación en " +
            subject +
            " es INSUFICIENTE";
        }
        if (num < 6) {
          this.result =
            "Nota: " +
            num +
            " - La calificación en " +
            subject +
            " es SUFICIENTE";
        }
        if (num < 7) {
          this.result =
            "Nota: " + num + " - La calificación en " + subject + " es BIEN";
        }
        if (num < 9) {
          this.result =
            "Nota: " + num + " - La calificación en " + subject + " es NOTABLE";
        }
        if (num <= 10) {
          this.result =
            "Nota: " +
            num +
            " - La calificación en " +
            subject +
            " es SOBRESALIENTE";
        }
      } else {
        this.result = "Introduzca una nota entre 0 y 10";
      }

      num = "";
      subject = "";
      this.resulList += this.resulList.push(this.result);
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
