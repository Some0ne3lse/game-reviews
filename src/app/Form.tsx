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
    <form onSubmit={props.addReview}>
      <div>
        <div>Name: </div>
        <input
          value={props.newName}
          onChange={props.handleNameChange}
          required
        />
      </div>
      <div>
        <div>Description: </div>
        <textarea
          value={props.newDescription}
          onChange={props.handleDescriptionChange}
          required
        />
      </div>
      <div>
        <div>Rating: </div>
        <input
          type="number"
          min={0}
          max={10}
          value={props.newRating}
          onChange={props.handleRatingChange}
          required
        />
      </div>
      <div>
        <div> Upload an image:</div>
        <input type="file" onChange={props.getFile} />
      </div>
      <div>
        <button type="submit">Add review</button>
      </div>
    </form>
  );
};
