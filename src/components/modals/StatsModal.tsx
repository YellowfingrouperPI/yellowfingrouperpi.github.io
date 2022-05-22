import Countdown from 'react-countdown'
import { GameStats } from '../../lib/localStorage'
import { showtime } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  NEW_WORD_TEXT,
  SHARE_TEXT,
} from '../../constants/strings'

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
      <a
        href="https://web.ovationtix.com/trs/pe.c/11080171"
        rel="noreferrer"
        target="_blank"
      >
        <img
          alt="Yellowfin Grouper P.I. performance flyer"
          width="100%"
          src="/logo.jpg"
        />
      </a>
      <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
        <div>
          <h5>{NEW_WORD_TEXT}</h5>
          <Countdown
            className="text-lg font-medium text-gray-900 dark:text-gray-100"
            date={showtime}
            daysInHours={false}
            renderer={({ hours, minutes, seconds, days }) => {
              return (
                <span>
                  {days}d {hours}h {minutes}m {seconds}s
                </span>
              )
            }}
          />
        </div>
        <a
          href="https://web.ovationtix.com/trs/pe.c/11080171"
          rel="noreferrer"
          target="_blank"
        >
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
