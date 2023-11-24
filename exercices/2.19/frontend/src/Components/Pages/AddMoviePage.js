import Navigate from '../Router/Navigate';
import { addOneMovie } from '../../models/movies';
import {clearPage} from '../../utils/render';

const AddMoviePage = () => {
  clearPage();
  renderAddMoviePage();
  const myForm = document.querySelector('form');
  myForm.addEventListener('submit', onAddMovie);
};

function renderAddMoviePage() {
  const addMoviePage = `
  <div class="text-center">
    <h3>Movies</h3>
  
    <p>Here you can find all movies</p>
  
    <form class="px-5">
              <div class="mb-3">
                <label for="title">Enter title</label>
                <input
                  class="form-control"
                  type="text"
                  name="title"
                  id="title"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="duration">Enter duration (minutes)</label>
                <input
                  class="form-control"
                  type="number"
                  name="duration"
                  id="duration"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="budget">Enter budget (million)</label>
                <input
                  class="form-control"
                  type="number"
                  name="budget"
                  id="budget"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="link">Enter link</label>
                <input
                  class="form-control"
                  type="url"
                  name="link"
                  id="link"
                  required
                />
              </div>
              <input type="submit" class="btn btn-primary" value="Add Moovie" />
      </form>  
  </div>`;
  const main = document.querySelector('main');
  main.innerHTML = addMoviePage;
  const myForm = document.querySelector('form');
  myForm.addEventListener('submit', onAddMovie);
}
async function onAddMovie(e){
  const title = document.querySelector('#title').value;
  const duration = document.querySelector('#duration').value;
  const budget = document.querySelector('#budget').value;
  const link = document.querySelector('#link').value;
  e.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        title,
        duration,
        budget,
        link, 
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  addOneMovie(options);
  Navigate('/movies');
}

export default AddMoviePage;
