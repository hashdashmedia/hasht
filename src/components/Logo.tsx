export function Logo({ size = 'default' }: { size?: 'default' | 'small' }) {
  const isSmall = size === 'small';

  return (
    <div className="flex items-center gap-3">
      <div className={`${isSmall ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-sky-500 flex items-center justify-center`}>
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className={`${isSmall ? 'text-lg' : 'text-xl'} font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-sky-400`}>
          MentionMasters
        </span>
        {!isSmall && (
          <span className="text-[10px] text-gray-400 -mt-1">
            GEO-Optimized Brand Mentions
          </span>
        )}
      </div>
    </div>
  );
}
