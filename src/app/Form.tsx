type FormProps = {
  addReview: (event: React.FormEvent<HTMLFormElement>) => void;
  newName: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newDescription: string;
  handleDescriptionChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  newRating: string;
  handleRatingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Form = (props: FormProps) => {
  return (
    <form className="form" onSubmit={props.addReview}>
      <div className="form-name">
        <h2>Name: </h2>
        <input
          className="form-name-input"
          value={props.newName}
          onChange={props.handleNameChange}
          required
        />
      </div>
      <div className="form-description">
        <h2>Description: </h2>
        <textarea
          className="form-description-input"
          value={props.newDescription}
          onChange={props.handleDescriptionChange}
          required
        />
      </div>
      <div className="form-rating">
        <h2>Rating: </h2>
        <input
          type="number"
          min={0}
          max={10}
          value={props.newRating}
          onChange={props.handleRatingChange}
          required
        />
      </div>
      <div className="form-image">
        <h2> Upload an image:</h2>
        <input type="file" onChange={props.getFile} accept="image/*" />
      </div>
      <div className="form-submit">
        <button type="submit">Add review</button>
      </div>
    </form>
  );
};
