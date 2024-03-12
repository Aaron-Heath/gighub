
    // selectedTags.map(tag => {
    //     <Chip value={tag}></Chip>
    // })

    
    {console.log(selectedTags)}
                    {selectedTags.map(tag => {
                        {console.log(tag)}
                        <Stack direction="row" spacing={1}>
                        <Chip label={tag} value={tag}></Chip>
                      </Stack>
                        
                    })}