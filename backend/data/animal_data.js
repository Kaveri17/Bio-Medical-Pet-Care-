const benchmarkData = [
  {
    animalType: "Dog",
    breed: "Nepali Sheepdog",
    weight: {
      min: 18,
      max: 30,
    },
    lifespan: {
      min: 12,
      max: 15,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 18, max: 22 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 22, max: 25 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 25, max: 28 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 28, max: 30 },
      },
      {
        age_range: { min: 8, max: 10 },
        weight_range: { min: 30, max: 30 },
      },
    ],
  },
  {
    animalType: "Dog",
    breed: "Rottweiler",
    weight: {
      min: 35,
      max: 60,
    },
    lifespan: {
      min: 8,
      max: 12,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 35, max: 40 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 40, max: 50 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 50, max: 55 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 55, max: 60 },
      },
      {
        age_range: { min: 8, max: 10 },
        weight_range: { min: 60, max: 60 },
      },
    ],
  },
  {
    animalType: "Dog",
    breed: "Labrador Retriever",
    weight: {
      min: 25,
      max: 35,
    },
    lifespan: {
      min: 10,
      max: 12,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 25, max: 30 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 30, max: 32 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 32, max: 34 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 34, max: 35 },
      },
      {
        age_range: { min: 8, max: 10 },
        weight_range: { min: 35, max: 35 },
      },
    ],
  },
  {
    animalType: "Dog",
    breed: "Pahadi Dog",
    weight: {
      min: 12,
      max: 20,
    },
    lifespan: {
      min: 10,
      max: 12,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 12, max: 15 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 15, max: 18 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 18, max: 19 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 19, max: 20 },
      },
      {
        age_range: { min: 8, max: 10 },
        weight_range: { min: 20, max: 20 },
      },
    ],
  },
  {
    animalType: "Dog",
    breed: "Gorkha Dog",
    weight: {
      min: 15,
      max: 25,
    },
    lifespan: {
      min: 10,
      max: 12,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 15, max: 18 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 18, max: 22 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 22, max: 24 }
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 24, max: 25 }
      },
      {
        age_range: { min: 8, max: 10 },
        weight_range: { min: 25, max: 25 }
      }
    ]
  },

  {
    animalType: "Cow",
    breed: "Lulu",
    weight: {
      min: 125,
      max: 150,
    },
    lifespan: {
      min: 12,
      max: 18,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 40, max: 55 },
        milk_per_day: { min: 0.5, max: 1 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 55, max: 80 },
        milk_per_day: { min: 1, max: 2 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 80, max: 100 },
        milk_per_day: { min: 2, max: 3 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 100, max: 130 },
        milk_per_day: { min: 3, max: 4 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 130, max: 150 },
        milk_per_day: { min: 4, max: 5 },
      },
      {
        age_range: { min: 12, max: 18 },
        weight_range: { min: 150, max: 170 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
    ],
  },
  {
    animalType: "Cow",
    breed: "Achhami",
    weight: {
      min: 40,
      max: 55,
    },
    lifespan: {
      min: 12,
      max: 16,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 40, max: 55 },
        milk_per_day: { min: 0.5, max: 1 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 55, max: 70 },
        milk_per_day: { min: 1, max: 1.5 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 70, max: 90 },
        milk_per_day: { min: 1.5, max: 2 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 90, max: 120 },
        milk_per_day: { min: 1.5, max: 2.5 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 120, max: 140 },
        milk_per_day: { min: 2, max: 3 },
      },
      {
        age_range: { min: 12, max: 16 },
        weight_range: { min: 140, max: 160 },
        milk_per_day: { min: 1.5, max: 2.5 },
      },
    ],
  },
  {
    animalType: "Cow",
    breed: "Siri",
    weight: {
      min: 150,
      max: 286.5,
    },
    lifespan: {
      min: 15,
      max: 18,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 60, max: 90 },
        milk_per_day: { min: 1, max: 2 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 90, max: 130 },
        milk_per_day: { min: 2, max: 3 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 130, max: 170 },
        milk_per_day: { min: 3, max: 4.5 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 170, max: 210 },
        milk_per_day: { min: 4.5, max: 6 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 210, max: 240 },
        milk_per_day: { min: 4, max: 5 },
      },
      {
        age_range: { min: 12, max: 18 },
        weight_range: { min: 240, max: 260 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
    ],
  },

  {
    animalType: "Cow",
    breed: "Khaila",
    weight: {
      min: 150,
      max: 298,
    },
    lifespan: {
      min: 12,
      max: 18,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 70, max: 100 },
        milk_per_day: { min: 1, max: 1.5 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 100, max: 140 },
        milk_per_day: { min: 1.5, max: 2.5 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 140, max: 180 },
        milk_per_day: { min: 2.5, max: 3.5 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 180, max: 220 },
        milk_per_day: { min: 3, max: 4 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 220, max: 250 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
      {
        age_range: { min: 12, max: 18 },
        weight_range: { min: 250, max: 280 },
        milk_per_day: { min: 3, max: 4 },
      },
    ],
  },
  {
    animalType: "Cow",
    breed: "Terai",
    weight: {
      min: 150,
      max: 210,
    },
    lifespan: {
      min: 12,
      max: 16,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 50, max: 75 },
        milk_per_day: { min: 0.5, max: 1.5 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 75, max: 110 },
        milk_per_day: { min: 1, max: 2 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 110, max: 140 },
        milk_per_day: { min: 2, max: 2.5 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 140, max: 170 },
        milk_per_day: { min: 2.5, max: 3 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 170, max: 200 },
        milk_per_day: { min: 3, max: 4 },
      },
      {
        age_range: { min: 12, max: 16 },
        weight_range: { min: 200, max: 220 },
        milk_per_day: { min: 2.5, max: 3.5 },
      },
    ],
  },
  {
    animalType: "Cow",
    breed: "Pahadi",
    weight: {
      min: 125,
      max: 150,
    },
    lifespan: {
      min: 12,
      max: 18,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 40, max: 60 },
        milk_per_day: { min: 0.5, max: 1 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 60, max: 85 },
        milk_per_day: { min: 1, max: 1.5 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 85, max: 110 },
        milk_per_day: { min: 1.5, max: 2.5 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 110, max: 140 },
        milk_per_day: { min: 2.5, max: 3.5 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 140, max: 160 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
      {
        age_range: { min: 12, max: 18 },
        weight_range: { min: 160, max: 180 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
    ],
  },

  {
    animalType: "Chicken",
    breed: "Sakini",
    weight: {
      min: 1.5,
      max: 2.4,
    },
    lifespan: {
      min: 5,
      max: 8,
    },
    average_temperature: 40,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 1.5, max: 1.8 },
        egg_production_per_week: { min: 1, max: 2 },
      },
      {
        age_range: { min: 2, max: 3 },
        weight_range: { min: 1.8, max: 2.0 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 3, max: 4 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 4, max: 5 },
        weight_range: { min: 2.2, max: 2.4 },
        egg_production_per_week: { min: 4, max: 5 },
      },
      {
        age_range: { min: 5, max: 6 },
        weight_range: { min: 2.4, max: 2.6 },
        egg_production_per_week: { min: 4, max: 5 },
      },
      {
        age_range: { min: 6, max: 7 },
        weight_range: { min: 2.6, max: 2.8 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 7, max: 8 },
        weight_range: { min: 2.8, max: 3.0 },
        egg_production_per_week: { min: 3, max: 4 },
      },
    ],
  },
  {
    animalType: "Chicken",
    breed: "Ghanti Khuile",
    weight: {
      min: 1.5,
      max: 2.2,
    },
    lifespan: {
      min: 5,
      max: 8,
    },
    average_temperature: 40,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 1.5, max: 1.8 },
        egg_production_per_week: { min: 1, max: 2 },
      },
      {
        age_range: { min: 2, max: 3 },
        weight_range: { min: 1.8, max: 2.0 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 3, max: 4 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 4, max: 5 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 5, max: 6 },
        weight_range: { min: 2.2, max: 2.4 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 6, max: 7 },
        weight_range: { min: 2.4, max: 2.6 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 7, max: 8 },
        weight_range: { min: 2.6, max: 2.8 },
        egg_production_per_week: { min: 2, max: 3 },
      },
    ],
  },
  {
    animalType: "Chicken",
    breed: "Puwankh Ulte",
    weight: {
      min: 1.4,
      max: 2.2,
    },
    lifespan: {
      min: 5,
      max: 8,
    },
    average_temperature: 40,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 1.4, max: 1.7 },
        egg_production_per_week: { min: 1, max: 2 },
      },
      {
        age_range: { min: 2, max: 3 },
        weight_range: { min: 1.7, max: 2.0 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 3, max: 4 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 4, max: 5 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 5, max: 6 },
        weight_range: { min: 2.2, max: 2.4 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 6, max: 7 },
        weight_range: { min: 2.4, max: 2.6 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 7, max: 8 },
        weight_range: { min: 2.6, max: 2.8 },
        egg_production_per_week: { min: 2, max: 3 },
      },
    ],
  },
];

export default benchmarkData;
