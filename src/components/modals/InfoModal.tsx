import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Welcome to Turtle Wordle! 🐢"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Well slow down there, whippersnapper. You have 6 tries to guess the
        word. Try to make all the letters green, just like me!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="correct"
        />
        <Cell value="C" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A great place to be. That O is in the correct spot!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="H" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="R" />
        <Cell value="K" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Where!? Oh, right. The A is somewhere, just not there!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="U" />
        <Cell value="M" />
        <Cell isRevealing={true} isCompleted={true} value="B" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        One of my regulars! That B? It's not in the word!
      </p>

      <br />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Now take your time and enjoy! Ha-Cha!
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.yellowfingrouperpi.com/"
      >
        <p className="text-sm dark:text-gray-300 font-bold">
          Presented by Yellowfin Grouper, P.I. LIVE
        </p>
      </a>
    </BaseModal>
  )
}
