const vaccineData = [
  {
    vaccine_name: "Foot and Mouth Disease Vaccine",
    animal_type: "67499d1a319afecc1dece5cd",//cow
    breeds: [
      "67499f8b0e7291df866a99f2", //Pahadi
      "67499faf0e7291df866a99f9", //Siri
      "67499fba0e7291df866a99fe", //Khaila
      "67499fc30e7291df866a9a03", //Terai
      "67499fcb0e7291df866a9a08", //Achhami
      "6749a0cd0e7291df866a9a39", //Lulu
    ],
    effectiveness: [
      { minAge: 0, maxAge: 24, effectivenessPercentage: 95 }, // 0-2 years
      { minAge: 24, maxAge: 48, effectivenessPercentage: 90 }, // 2-4 years
      { minAge: 48, maxAge: 72, effectivenessPercentage: 85 }, // 4-6 years
      { minAge: 72, maxAge: 96, effectivenessPercentage: 80 }, // 6-8 years
      { minAge: 96, maxAge: 120, effectivenessPercentage: 75 }, // 8-10 years
      { minAge: 120, maxAge: 240, effectivenessPercentage: 65 }, // 10-20 years
    ],
  },
  {
    vaccine_name: "Black Quarter Vaccine",
    animal_type: "67499d1a319afecc1dece5cd",//cow
    breeds: [
      "6749a0cd0e7291df866a9a39", //Lulu
      "67499faf0e7291df866a99f9", //Siri
      "67499fc30e7291df866a9a03", //Terai
    ],
    effectiveness: [
      { minAge: 0, maxAge: 24, effectivenessPercentage: 92 }, // 0-2 years
      { minAge: 24, maxAge: 48, effectivenessPercentage: 88 }, // 2-4 years
      { minAge: 48, maxAge: 72, effectivenessPercentage: 84 }, // 4-6 years
      { minAge: 72, maxAge: 96, effectivenessPercentage: 80 }, // 6-8 years
      { minAge: 96, maxAge: 120, effectivenessPercentage: 75 }, // 8-10 years
      { minAge: 120, maxAge: 240, effectivenessPercentage: 70 }, // 10-20 years
    ],
  },
  {
    vaccine_name: "Anthrax Vaccine",
    animal_type: "67499d1a319afecc1dece5cd",//cow
    breeds: [
      "67499f8b0e7291df866a99f2", //Pahadi
      "67499fcb0e7291df866a9a08", //Achhami
    ],
    effectiveness: [
      { minAge: 0, maxAge: 24, effectivenessPercentage: 97 }, // 0-2 years
      { minAge: 24, maxAge: 48, effectivenessPercentage: 93 }, // 2-4 years
      { minAge: 48, maxAge: 72, effectivenessPercentage: 88 }, // 4-6 years
      { minAge: 72, maxAge: 96, effectivenessPercentage: 83 }, // 6-8 years
      { minAge: 96, maxAge: 120, effectivenessPercentage: 78 }, // 8-10 years
      { minAge: 120, maxAge: 240, effectivenessPercentage: 70 }, // 10-20 years
    ],
  },
  {
    vaccine_name: "Brucellosis Vaccine",
    animal_type: "67499d1a319afecc1dece5cd",//cow
    breeds: [
      "6749a0cd0e7291df866a9a39", //Lulu
      "67499fcb0e7291df866a9a08", //Achhami
    ],
    effectiveness: [
      { minAge: 0, maxAge: 24, effectivenessPercentage: 94 },
      { minAge: 24, maxAge: 48, effectivenessPercentage: 90 },
      { minAge: 48, maxAge: 72, effectivenessPercentage: 85 },
      { minAge: 72, maxAge: 96, effectivenessPercentage: 80 },
    ],
  },
  {
    vaccine_name: "Haemorrhagic Septicaemia Vaccine",
    animal_type: "67499d1a319afecc1dece5cd",//cow
    breeds: [
      "67499fba0e7291df866a99fe", //Khaila
      "67499faf0e7291df866a99f9", //Siri
      "67499fc30e7291df866a9a03", //Terai
    ],
    effectiveness: [
      { minAge: 0, maxAge: 24, effectivenessPercentage: 93 },
      { minAge: 24, maxAge: 48, effectivenessPercentage: 88 },
      { minAge: 48, maxAge: 72, effectivenessPercentage: 82 },
      { minAge: 72, maxAge: 96, effectivenessPercentage: 78 },
    ],
  },
  {
    vaccine_name: "Rabies Vaccine",
    animal_type: "67499c5380d21450c9500ab6",//dog
    breeds: [
      "6749a05b0e7291df866a9a1e", //Nepali Sheepdog
      "6749a06a0e7291df866a9a23", //Rottweiler
      "6749a0760e7291df866a9a28", //Labrador Retriever
      "6749a0810e7291df866a9a2d", //Pahadi Dog
      "6749a08b0e7291df866a9a32", //Gorkha Dog
    ],
    effectiveness: [
      { minAge: 0, maxAge: 12, effectivenessPercentage: 99 }, // 0-1 year
      { minAge: 12, maxAge: 24, effectivenessPercentage: 97 }, // 1-2 years
      { minAge: 24, maxAge: 36, effectivenessPercentage: 94 }, // 2-3 years
      { minAge: 36, maxAge: 60, effectivenessPercentage: 90 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
      { minAge: 84, maxAge: 108, effectivenessPercentage: 79 }, // 7-9 years
      { minAge: 108, maxAge: 144, effectivenessPercentage: 72 }, // 9-12 years
      { minAge: 144, maxAge: 180, effectivenessPercentage: 65 }, // 12-15 years
    ],
  },
  {
    vaccine_name: "Canine Distemper Vaccine",
    animal_type: "67499c5380d21450c9500ab6",//dog
    breeds: [
      "6749a05b0e7291df866a9a1e", //Nepali Sheepdog
      "6749a08b0e7291df866a9a32", //Gorkha Dog
    ],
    effectiveness: [
      { minAge: 0, maxAge: 12, effectivenessPercentage: 98 }, // 0-1 year
      { minAge: 12, maxAge: 24, effectivenessPercentage: 95 }, // 1-2 years
      { minAge: 24, maxAge: 36, effectivenessPercentage: 92 }, // 2-3 years
      { minAge: 36, maxAge: 60, effectivenessPercentage: 88 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
      { minAge: 84, maxAge: 108, effectivenessPercentage: 79 }, // 7-9 years
      { minAge: 108, maxAge: 144, effectivenessPercentage: 72 }, // 9-12 years
      { minAge: 144, maxAge: 180, effectivenessPercentage: 65 }, // 12-15 years
    ],
  },
  {
    vaccine_name: "Parvovirus Vaccine",
    animal_type: "67499c5380d21450c9500ab6",//dog
    breeds: [
      "6749a06a0e7291df866a9a23", //Rottweiler
      "6749a0760e7291df866a9a28", //Labrador Retriever
    ],
    effectiveness: [
      { minAge: 0, maxAge: 12, effectivenessPercentage: 95 }, // 0-1 year
      { minAge: 12, maxAge: 24, effectivenessPercentage: 93 }, // 1-2 years
      { minAge: 24, maxAge: 36, effectivenessPercentage: 90 }, // 2-3 years
      { minAge: 36, maxAge: 60, effectivenessPercentage: 85 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
      { minAge: 84, maxAge: 108, effectivenessPercentage: 79 }, // 7-9 years
      { minAge: 108, maxAge: 144, effectivenessPercentage: 72 }, // 9-12 years
      { minAge: 144, maxAge: 180, effectivenessPercentage: 65 }, // 12-15 years
    ],
  },
  {
    vaccine_name: "Leptospirosis Vaccine",
    animal_type: "67499c5380d21450c9500ab6",//dog
    breeds: [
      "6749a05b0e7291df866a9a1e", //Nepali Sheepdog
      "6749a0810e7291df866a9a2d", //Pahadi Dog
    ],
    effectiveness: [
      { minAge: 0, maxAge: 12, effectivenessPercentage: 97 },
      { minAge: 12, maxAge: 24, effectivenessPercentage: 94 },
      { minAge: 24, maxAge: 36, effectivenessPercentage: 90 },
      { minAge: 36, maxAge: 60, effectivenessPercentage: 85 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
    ],
  },
  {
    vaccine_name: "Lyme Disease Vaccine",
    animal_type: "67499c5380d21450c9500ab6",//dog
    breeds: [
      "6749a06a0e7291df866a9a23", //Rottweiler
      "6749a0760e7291df866a9a28", //Labrador Retriever
      "6749a0810e7291df866a9a2d", //Pahadi Dog
    ],
    effectiveness: [
      { minAge: 0, maxAge: 12, effectivenessPercentage: 96 },
      { minAge: 12, maxAge: 24, effectivenessPercentage: 93 },
      { minAge: 24, maxAge: 36, effectivenessPercentage: 89 },
      { minAge: 36, maxAge: 60, effectivenessPercentage: 85 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
    ],
  },
  {
    vaccine_name: "Newcastle Disease Vaccine",
    animal_type: "67499c6080d21450c9500ab9",//chicken
    breeds: [
      "67499fe90e7291df866a9a0d", //Sakini
      "6749a0030e7291df866a9a12", //Ghanti Khuile
      "6749a0170e7291df866a9a17", //Puwankh Ulte
    ],
    effectiveness: [
      { minAge: 0, maxAge: 6, effectivenessPercentage: 85 }, // 0-6 months
      { minAge: 6, maxAge: 12, effectivenessPercentage: 80 }, // 6-12 months
      { minAge: 12, maxAge: 18, effectivenessPercentage: 75 }, // 12-18 months
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
      { minAge: 84, maxAge: 108, effectivenessPercentage: 79 }, // 7-9 years
      { minAge: 108, maxAge: 144, effectivenessPercentage: 72 }, // 9-12 years
      { minAge: 144, maxAge: 180, effectivenessPercentage: 65 }, // 12-15 years
    ],
  },
  {
    vaccine_name: "Infectious Bronchitis Vaccine",
    animal_type: "67499c6080d21450c9500ab9",//chicken
    breeds: [
      "67499fe90e7291df866a9a0d", //Sakini
    ],
    effectiveness: [
      { minAge: 0, maxAge: 6, effectivenessPercentage: 90 }, // 0-6 months
      { minAge: 6, maxAge: 12, effectivenessPercentage: 85 }, // 6-12 months
      { minAge: 12, maxAge: 18, effectivenessPercentage: 80 }, // 12-18 months
      { minAge: 18, maxAge: 24, effectivenessPercentage: 80 }, // 1.5-2 yrs
      { minAge: 24, maxAge: 36, effectivenessPercentage: 80 }, // 2-3 yrs
      { minAge: 36, maxAge: 60, effectivenessPercentage: 85 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
    ],
  },
  {
    vaccine_name: "Marek's Disease Vaccine",
    animal_type: "67499c6080d21450c9500ab9",//chicken
    breeds: [
      "6749a0030e7291df866a9a12", //Ghanti Khuile
      "6749a0170e7291df866a9a17", //Puwankh Ulte
    ],
    effectiveness: [
      { minAge: 0, maxAge: 6, effectivenessPercentage: 95 }, // 0-6 months
      { minAge: 6, maxAge: 12, effectivenessPercentage: 90 }, // 6-12 months
      { minAge: 12, maxAge: 18, effectivenessPercentage: 85 }, // 12-18 months
      { minAge: 18, maxAge: 24, effectivenessPercentage: 80 }, // 1.5-2 yrs
      { minAge: 24, maxAge: 36, effectivenessPercentage: 80 }, // 2-3 yrs
      { minAge: 36, maxAge: 60, effectivenessPercentage: 85 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
    ],
  },
  {
    vaccine_name: "Salmonella Vaccine",
    animal_type: "67499c6080d21450c9500ab9",//chicken
    breeds: [
      "67499fe90e7291df866a9a0d", //Sakini,
      "6749a0030e7291df866a9a12", //Ghanti Khuile
    ],
    effectiveness: [
      { minAge: 0, maxAge: 6, effectivenessPercentage: 88 },
      { minAge: 6, maxAge: 12, effectivenessPercentage: 85 },
      { minAge: 12, maxAge: 18, effectivenessPercentage: 80 },
      { minAge: 18, maxAge: 24, effectivenessPercentage: 80 }, // 1.5-2 yrs
      { minAge: 24, maxAge: 36, effectivenessPercentage: 80 }, // 2-3 yrs
      { minAge: 36, maxAge: 60, effectivenessPercentage: 85 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
    ],
  },
  {
    vaccine_name: "Avian Influenza Vaccine",
    animal_type: "67499c6080d21450c9500ab9", //chicken
    breeds: [
      "6749a0170e7291df866a9a17", //Puwankh Ulte
    ],
    effectiveness: [
      { minAge: 0, maxAge: 6, effectivenessPercentage: 92 },
      { minAge: 6, maxAge: 12, effectivenessPercentage: 88 },
      { minAge: 12, maxAge: 18, effectivenessPercentage: 83 },
      { minAge: 18, maxAge: 24, effectivenessPercentage: 80 }, // 1.5-2 yrs
      { minAge: 24, maxAge: 36, effectivenessPercentage: 80 }, // 2-3 yrs
      { minAge: 36, maxAge: 60, effectivenessPercentage: 85 }, // 3-5 years
      { minAge: 60, maxAge: 84, effectivenessPercentage: 85 }, // 5-7 years
    ],
  },
];

export default vaccineData;
