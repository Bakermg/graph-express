  import { useNavigate } from "react-router-dom"
  import { FaTrash } from "react-icons/fa"
  import { GET_PROJECTS } from "../queries/projectQueries"
  import { DELETE_PROJECT } from "../mutations/projectMutations"

  // Mutations
  import { useMutation } from "@apollo/client"

  export const DeleteProjectButton = ({ projectId }) => {
    const navigate = useNavigate()

    const [deleteProject] = useMutation(DELETE_PROJECT, {
      variables: { id: projectId },
      onCompleted: () => {
        navigate("/")
      },
      refetchQueries: [{ query: GET_PROJECTS }],
    })

    return (
      <div className="d-flex mt-4">
        <button className="btn btn-danger mt-2" onClick={deleteProject}>
          <FaTrash className="icon" />
          Delete Project
        </button>
      </div>
    ) 
  }