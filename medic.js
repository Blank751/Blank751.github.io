window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    var bmi = weight / ((height / 100) ** 2);
    var category = "";

    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
    } else if (bmi < 25) {
        category = "Berat badan normal";
    } else if (bmi < 30) {
        category = "Kelebihan berat badan";
    } else {
        category = "Kegemukan (Obesitas)";
    }

    resultDiv.innerHTML = "Nilai BMI Anda: " + bmi.toFixed(2) + " (" + category + ")";
}

const quizData = [
    {
        question: "Seberapa sering kamu menggunakan media digital?",
        options: ["Setiap saat", "Beberapa kali sehari", "Sekali sehari", "Jarang"],
        answer: "Setiap saat"
    },
    {
        question: "Bagaimana media sosial dapat mengubah perilaku kesehatan masyarakat?",
        options: ["Dengan menyebarkan gosip", "Dengan memberikan hiburan semata", "Dengan menyebarkan informasi yang mendorong gaya hidup sehat", "Dengan menyaring konten"],
        answer: "Dengan menyebarkan informasi yang mendorong gaya hidup sehat"
    },
    {
        question: "Contoh kampanye digital yang meningkatkan kesadaran tentang COVID-19 adalah:",
        options: ["Iklan makanan cepat saji", "Kampanye vaksinasi melalui media sosial", "Promosi produk kecantikan", "Lomba memasak online"],
        answer: "Kampanye vaksinasi melalui media sosial"
    },
    {
        question: "Dampak positif dari aplikasi pengingat minum air atau olahraga adalah:",
        options: ["Menyebabkan kecanduan gadget", "Membentuk kebiasaan sehat", "Menambah berat badan", "Membuat pengguna malas bergerak"],
        answer: "Membentuk kebiasaan sehat"
    },
    {
        question: "Apa yang dimaksud dengan edukasi kesehatan digital?",
        options: ["Edukasi yang hanya dilakukan oleh tenaga medis", "Penyampaian informasi kesehatan lewat media televisi", "Penyampaian informasi kesehatan melalui platform digital", "Penyuluhan kesehatan di rumah sakit"],
        answer: "Penyampaian informasi kesehatan melalui platform digital"
    }
]


let currentQuestion = 0;
let score = 0;

function startQuiz(){
    showQuestion();
}

function showQuestion(){
    const questionElement = document.querySelector(".question");
    const optionsElement = document.querySelector(".options");

    const data = quizData[currentQuestion];
    questionElement.textContent = data.question;

  // Kosongkan opsi dulu
    optionsElement.innerHTML = "";

  // Tampilkan semua opsi
  data.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
    alert("Jawaban benar!");
  } else {
    alert("Jawaban salah!");
  }

  // Lanjut ke soal berikutnya
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
    const quizSection = document.getElementById("quiz");
    quizSection.innerHTML = `
      <h2>Kuis Selesai!</h2>
      <p>Skor kamu: ${score} dari ${quizData.length}</p>
    `;
  }
  
  