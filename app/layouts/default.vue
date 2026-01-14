<template>
  <div size="full" flex="~" justify="between">
    <LayoutDefaultMenu />

    <div flex="1 ~ col" h="full" gap="2" min-h="0">
      <header
        flex="~" items="center" justify="between" p="4" content="after:empty" relative="~" gap="4"
        absolute="after:~" w="after:full" h="after:1px" bg="after:stone-800/30" bottom="after:0" left="after:0"
      >
        <div flex="~" items="center" gap="4">
          <LayoutDefaultSearch />

          <UButton color="neutral" variant="subtle" icon="i-lucide-search">
            UPLOAD
          </UButton>
        </div>

        <div />
      </header>

      <main flex="1 " w="full">
        <slot />
      </main>
    </div>
  </div>
</template>
