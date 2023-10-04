const healthModules = [
  {
    number: 1,
    title: "Understanding Pregnancy",
    description:
      "An introduction to the journey of pregnancy and its stages. Gain essential insights for expectant mothers about the physical and emotional changes during this transformative period.",
  },
  {
    number: 2,
    title: "Prenatal Care and Check-ups",
    description:
      "Explore the significance of regular prenatal care and doctor visits in ensuring a healthy pregnancy and baby. Learn about essential screenings and health monitoring.",
  },
  {
    number: 3,
    title: "Managing Pregnancy Discomforts",
    description:
      "Equip yourself with effective strategies to cope with common discomforts like morning sickness, fatigue, and heartburn. Learn how to enhance your comfort and well-being during pregnancy.",
    content: (
      <div class="mx-auto">
        <div class="mb-6">
          <p>
            Pregnancy can bring about various discomforts due to hormonal
            changes and physical strain. Here are some of the common
            discomforts:
          </p>
          <ul class="list-disc list-inside ml-4">
            <li>Morning sickness</li>
            <li>Backache</li>
            <li>Swollen ankles and feet</li>
            <li>Heartburn</li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">Morning Sickness Relief</h2>
          <p>
            Many pregnant women experience morning sickness. Here are some tips
            to help alleviate it:
          </p>
          <img
            src="/assets/moduleImages/sickness.png"
            alt="Pregnant woman dealing with morning sickness"
            class="w-full h-auto mb-4"
          />
          <ul class="list-disc list-inside ml-4">
            <li>Eat small, frequent meals</li>
            <li>Avoid spicy and greasy foods</li>
            <li>Stay hydrated</li>
            <li>Consider ginger supplements</li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">
            Relieving Backache and Discomfort
          </h2>
          <p>
            Backaches are common during pregnancy due to the growing belly. Here
            are some strategies to find relief:
          </p>
          <ul class="list-disc list-inside ml-4">
            <li>Practice good posture</li>
            <li>Use pregnancy pillows for support</li>
            <li>Engage in gentle exercises like prenatal yoga</li>
            <li>Consider a maternity support belt</li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">Swollen Ankles and Feet</h2>
          <p>
            Swelling in the ankles and feet is a common pregnancy symptom. To
            reduce discomfort:
          </p>
          <ul class="list-disc list-inside ml-4">
            <li>Elevate your legs when resting</li>
            <li>Avoid standing for long periods</li>
            <li>Wear comfortable, supportive shoes</li>
            <li>Stay hydrated and reduce salt intake</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-2">Managing Heartburn</h2>
          <p>
            Heartburn can be bothersome during pregnancy. Here are some ways to
            manage it:
          </p>
          <ul class="list-disc list-inside ml-4">
            <li>Eat smaller, more frequent meals</li>
            <li>Avoid spicy and acidic foods</li>
            <li>Sleep with your head elevated</li>
            <li>Consult your healthcare provider for safe antacids</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    number: 4,
    title: "Preparing for Labor and Delivery",
    description:
      "Gain a comprehensive understanding of what to expect during labor and delivery. Prepare mentally and physically for childbirth, exploring birth plans and pain management options.",
  },
  {
    number: 5,
    title: "Postpartum Care and Recovery",
    description:
      "After the birth, focus on postpartum care and recovery. Learn about self-care, newborn care, and the physical and emotional changes that follow childbirth.",
  },
];

export default healthModules;
