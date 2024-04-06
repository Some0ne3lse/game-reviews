import { use, useState } from "react";

type FormProps = {
  addReview: any;
  newName: any;
  handleNameChange: any;
  newDescription: any;
  handleDescriptionChange: any;
  newRating: any;
  handleRatingChange: any;
  getFile: any;
};

const GameReviewForm = ({
  addReview,
  newName,
  handleNameChange,
  newDescription,
  handleDescriptionChange,
  newRating,
  handleRatingChange,
  getFile,
}: FormProps) => {
  return (
    <form onSubmit={addReview}>
      <div>
        <div>Name: </div>
        <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <div>Description: </div>
        <textarea value={newDescription} onChange={handleDescriptionChange} />
      </div>
      <div>
        <div>Rating: </div>
        <input
          type="number"
          min={0}
          max={10}
          value={newRating}
          onChange={handleRatingChange}
        />
      </div>
      <div>
        <div> Upload an image:</div>
        <input type="file" onChange={getFile} />
      </div>
      <div>
        <button type="submit">Add review</button>
      </div>
    </form>
  );
};

type GameReviewProps = {
  reviewsList: any;
  fileName: any;
};

const GameReview = ({ reviewsList, fileName }: GameReviewProps) => {
  return (
    <ul>
      {reviewsList.map((game: any, index: number) => (
        <li key={index}>
          <div className="review-content">
            <div>
              <div>
                <div>Game:</div>
                {game.name}
              </div>
              <div>
                <div>Description:</div>
                {game.description}
              </div>
              <div>
                <div>Rating:</div>
                {game.rating}
              </div>
            </div>
            <img src={fileName} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default () => {
  const [reviews, setReviews] = useState([] as Array<object>);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [file, setFile] = useState("");

  const addReview = (event: any) => {
    event.preventDefault();
    const reviewObject = {
      name: newName,
      description: newDescription,
      rating: newRating,
    };
    setReviews(reviews.concat(reviewObject));
    setNewName("");
    setNewDescription("");
    setNewRating(0);
  };

  const handleNameChange = (event: any) => {
    setNewName(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setNewDescription(event.target.value);
  };

  const handleRatingChange = (event: any) => {
    setNewRating(event.target.value);
  };

  const getFile = (event: any) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <GameReviewForm
        addReview={addReview}
        newName={newName}
        handleNameChange={handleNameChange}
        newDescription={newDescription}
        handleDescriptionChange={handleDescriptionChange}
        newRating={newRating}
        handleRatingChange={handleRatingChange}
        getFile={getFile}
      />
      <GameReview reviewsList={reviews} fileName={file} />
    </>
  );
};
