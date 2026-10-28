import { site } from '../config/site'

export function AnnouncementBar() {
  return (
    <div className="bg-navy-900 px-4 py-2 text-center text-sm font-medium tracking-wide text-white">
      <p>{site.announcement}</p>
    </div>
  )
}
