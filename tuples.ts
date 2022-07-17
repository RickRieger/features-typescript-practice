const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias for a Tuple
type Drink = [string, boolean, number];

// So then...
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
