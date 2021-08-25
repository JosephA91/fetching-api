async function loadDwellings() {
  return (await fetch('https://morning-depths-03731.herokuapp.com/dwellings')).json();
}

document.addEventListener('DOMContentLoaded', async () => {
  let dwellings = [];

  try {
    dwellings = await loadDwellings();
  } catch (err) {
    console.log('Error', err)
  }

  console.log(dwellings);

  const new_arr = await dwellings.data.map(dwelling => {
    console.log(dwelling.attributes['full-address']);
    console.log(dwelling.attributes['next-general-waste-day']);
    console.log(dwelling.attributes['next-recycling-waste-day']);
    console.log(dwelling.attributes['next-green-waste-day']);
  });
});