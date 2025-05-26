import { GameStats } from '../../lib/localStorage'
import { BaseModal } from './BaseModal'
import { STATISTICS_TITLE, SHARE_TEXT } from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <a href="https://www.yellowfingrouperpi.com/" rel="noreferrer">
        <img
          alt="Yellowfin Grouper P.I. Season 2"
          width="100%"
          src="/season2.jpeg"
        />
      </a>
      <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
        <a href="https://www.yellowfingrouperpi.com/" rel="noreferrer">
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            {SHARE_TEXT}
          </button>
        </a>
      </div>
    </BaseModal>
  )
}
